import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import MainLayout from "~/layouts/main";

export const meta: MetaFunction = () => {
  return [
    { title: "Churn Solution Test" },
    { name: "description", content: "Churn Solution Test" },
  ];
};

export default function Index() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
