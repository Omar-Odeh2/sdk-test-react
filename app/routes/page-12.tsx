import MainLayout from "~/layouts/main";
import Content from "~/components/content";

export default function Index() {
  return (
    <MainLayout>
      <div className="p-8">
        <h1>Page #12</h1>
        <Content />
      </div>
    </MainLayout>
  );
}
