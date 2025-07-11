import { NavLink } from "@remix-run/react";
import { ReactNode, useEffect } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  function runRecoveryScript() {
    (window as any).churnSolution?.checkFailedPayment(
      "1142e6676c5d4337d6b3be9b248f61615379313fd1e2023f8871b531f2525116",
      "sub_1RjmcFGKID6HxEjkAicMNUmR",
      "ak_9bb38d6a23acc14b",
      {
        record: true, // enable recording flag, is true by default
        layoutSelector: "div#main-layout", // the layout in which the banner is displayed, defaults to the body
        bannerType: "sticky", // banner positioning type, can be either "sticky" or "fixed", defaults to "sticky"
        bannerTopPosition: 0, // banner top coordinate (in pixels), set to 0 by default
      }
    );
  }

  function onChurnSolutionLoad(
    callback = () => {},
    timeout = 10000,
    interval = 100
  ) {
    const startTime = Date.now();

    const check = () => {
      if ((window as any).churnSolution) {
        callback();
      } else if (Date.now() - startTime < timeout) {
        setTimeout(check, interval);
      } else {
        console.warn("Churn Solution script did not load in time.");
      }
    };

    check();
  }

  useEffect(() => {
    onChurnSolutionLoad(() => runRecoveryScript());
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <header className="w-full p-6 border-b border-white">
        <nav className="flex items-center gap-9">
          {pages.map(({ label, path }, index) => (
            <NavLink key={index} to={path}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <div id="main-layout" className="flex flex-col">
        {children}
      </div>
    </div>
  );
}

const pages = [
  {
    label: "Page #1",
    path: "/page-1",
  },
  {
    label: "Page #11",
    path: "/page-11",
  },
  {
    label: "Page #12",
    path: "/page-12",
  },
  {
    label: "Page #2",
    path: "/page-2",
  },
  {
    label: "Page #3",
    path: "/page-3",
  },
];
