import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { AppRoutes } from './routes/routes';
import { useLocation } from 'react-router-dom';
import './assets/css/bootstrap.min.css'
import './App.css';
import './assets/css/main.css'
import './assets/css/responsive.css'
import './assets/css/animations.css'
import { useSpinner } from './context/spinner/spinner';
// import './assets/css/responsive.css'
// import './assets/css/all.min.css'
// import './assets/css/animations.css'
import { useDevice } from './context/deviceTypeContext';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash, faCircleCheck, faCheck, faTimes,
  faBars, faCopy, faArrowsRotate, faDownload, faGear, faCogs,
  faFileCirclePlus, faTrash, faTrashCan, faEraser, faXmark,
  faPaperPlane, faCheckCircle, faUser, faPlus, faMinus,
  faCirclePlus, faBullseye, faLightbulb, faSchool,
  faHandsHelping, faPuzzlePiece, faPencil, faGraduationCap,
  faEnvelope, faPhone, faLocationDot, faComment,
  faCommentAlt, faPhoneSquare, faChartBar, faArrowLeftLong,
  faArrowLeft, faArrowRightLong, faArrowRight, faLessThan,
  faGreaterThan, faChevronLeft, faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faEye, faEyeSlash, faCircleCheck, faCheck,
  faTimes, faBars, faCopy, faArrowsRotate,
  faDownload, faGear, faCogs, faFileCirclePlus,
  faTrash, faTrashCan, faEraser, faXmark,
  faPaperPlane, faCheckCircle, faUser, faPlus,
  faMinus, faCirclePlus, faBullseye, faLightbulb, faSchool,
  faHandsHelping, faPuzzlePiece, faPencil, faGraduationCap,
  faEnvelope, faPhone, faLocationDot, faComment,
  faCommentAlt, faPhoneSquare, faChartBar, faArrowLeftLong,
  faArrowLeft, faArrowRightLong, faArrowRight, faLessThan,
  faGreaterThan, faChevronLeft, faChevronRight, faLinkedin,
  faGithub
);

function App() {
  const pageLoadingRef = useRef()
  const { setPageLoading, SpinnerComponent, pageLoading } = useSpinner()
  const { label, width, isMobile } = useDevice()
  const location = useLocation().pathname;

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const animatedElements = document.querySelectorAll(".animate");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              // observer.unobserve(entry.target);
            } else {
              entry.target.classList.remove("in-view");
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px",
        }
      );
  
      animatedElements.forEach((el) => observer.observe(el));
  
      // store observer on window temporarily so cleanup can access it
      window.__pageObserver = observer;
    });
  
    return () => {
      cancelAnimationFrame(raf);
  
      if (window.__pageObserver) {
        window.__pageObserver.disconnect();
        window.__pageObserver = null;
      }
    };
  }, [location]);

  useLayoutEffect(() => {
    setPageLoading(true);
  
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 400);
  
    return () => clearTimeout(timer);
  }, [location]);

  return (
      <>
          <section className={`spinner-loading ${pageLoading?'':'d-none'}`}>
            <SpinnerComponent />
          </section>
          <div className={pageLoading ? 'd-none' : ''}>
            <AppRoutes />
          </div>
      </>
  );
}

export default App;
