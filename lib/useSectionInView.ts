import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ActiveSectionContext } from "@/context/active-section-provider";

export default function useSectionInView(name: string, threshold = 0.75) {
  const { setActiveSection, lastTimeClick } = useContext(ActiveSectionContext);
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - lastTimeClick > 1000) {
      setActiveSection(name);
    }
  }, [inView, setActiveSection, lastTimeClick]);

  return { ref };
}
