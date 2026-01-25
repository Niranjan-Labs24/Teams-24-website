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
    const module = await import("gsap");
    gsapInstance = module.gsap;
  }

  const modules: GSAPModules = { gsap: gsapInstance };
  const promises: Promise<any>[] = [];

  if (plugins?.scrollTrigger && !gsapCache?.ScrollTrigger) {
    promises.push(import("gsap/ScrollTrigger"));
  } else if (gsapCache?.ScrollTrigger) {
    modules.ScrollTrigger = gsapCache.ScrollTrigger;
  }

  if (plugins?.scrollToPlugin && !gsapCache?.ScrollToPlugin) {
    promises.push(import("gsap/ScrollToPlugin"));
  } else if (gsapCache?.ScrollToPlugin) {
    modules.ScrollToPlugin = gsapCache.ScrollToPlugin;
  }

  const resolvedPlugins = await Promise.all(promises);

  resolvedPlugins.forEach((pluginModule) => {
    if (pluginModule.ScrollTrigger) {
      modules.ScrollTrigger = pluginModule.ScrollTrigger;
      gsapInstance!.registerPlugin(pluginModule.ScrollTrigger);
    }
    if (pluginModule.ScrollToPlugin) {
      modules.ScrollToPlugin = pluginModule.ScrollToPlugin;
      gsapInstance!.registerPlugin(pluginModule.ScrollToPlugin);
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
