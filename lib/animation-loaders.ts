export interface GSAPModules {
  gsap: typeof import("gsap").gsap;
  ScrollTrigger?: typeof import("gsap/ScrollTrigger").ScrollTrigger;
  ScrollToPlugin?: typeof import("gsap/ScrollToPlugin").ScrollToPlugin;
}

export interface FramerMotionModules {
  motion: typeof import("framer-motion").motion;
  AnimatePresence?: typeof import("framer-motion").AnimatePresence;
}

let gsapCache: GSAPModules | null = null;
let framerMotionCache: FramerMotionModules | null = null;

async function retryImport<T>(fn: () => Promise<T>, retries = 2, delay = 250): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return retryImport(fn, retries - 1, delay * 2);
    }
    throw error;
  }
}

export async function loadGSAP(
  plugins?: {
    scrollTrigger?: boolean;
    scrollToPlugin?: boolean;
  }
): Promise<GSAPModules> {
  if (gsapCache) {
    const needsScrollTrigger = plugins?.scrollTrigger && !gsapCache.ScrollTrigger;
    const needsScrollTo = plugins?.scrollToPlugin && !gsapCache.ScrollToPlugin;

    if (!needsScrollTrigger && !needsScrollTo) {
      return gsapCache;
    }
  }

  let gsapInstance = gsapCache?.gsap;
  if (!gsapInstance) {
    const module = await retryImport(() => import("gsap"));
    gsapInstance = module.gsap || (module as any).default?.gsap || (module as any).default || (module as any);
  }

  const modules: GSAPModules = { gsap: gsapInstance };
  const promises: Promise<any>[] = [];

  if (plugins?.scrollTrigger && !gsapCache?.ScrollTrigger) {
    promises.push(retryImport(() => import("gsap/ScrollTrigger")));
  } else if (gsapCache?.ScrollTrigger) {
    modules.ScrollTrigger = gsapCache.ScrollTrigger;
  }

  if (plugins?.scrollToPlugin && !gsapCache?.ScrollToPlugin) {
    promises.push(retryImport(() => import("gsap/ScrollToPlugin")));
  } else if (gsapCache?.ScrollToPlugin) {
    modules.ScrollToPlugin = gsapCache.ScrollToPlugin;
  }

  const resolvedPlugins = await Promise.all(promises);

  resolvedPlugins.forEach((pluginModule) => {
    const st = pluginModule.ScrollTrigger || (pluginModule as any).default?.ScrollTrigger || (pluginModule as any).default;
    const stp = pluginModule.ScrollToPlugin || (pluginModule as any).default?.ScrollToPlugin || (pluginModule as any).default;
    
    if (st) {
      modules.ScrollTrigger = st;
      gsapInstance!.registerPlugin(st);
    }
    if (stp) {
      modules.ScrollToPlugin = stp;
      gsapInstance!.registerPlugin(stp);
    }
  });

  gsapCache = { ...gsapCache, ...modules };
  return gsapCache;
}

export async function loadFramerMotion(
  options?: {
    includeAnimatePresence?: boolean;
  }
): Promise<FramerMotionModules> {
  if (framerMotionCache && (!options?.includeAnimatePresence || framerMotionCache.AnimatePresence)) {
    return framerMotionCache;
  }

  const motionModule = await import("framer-motion");
  const modules: FramerMotionModules = {
    motion: motionModule.motion,
  };

  if (options?.includeAnimatePresence) {
    modules.AnimatePresence = motionModule.AnimatePresence;
  }

  framerMotionCache = modules;
  return modules;
}
