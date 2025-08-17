"use-client";
import AmazonOrigin from "@/Components/AmazonOrigin";
import Contacts from "@/Components/Contacts";
import EmailForm from "@/Components/EmailForm";
import MyPaneFlow from "@/Components/MyPaneFlow";
import MyPaneFlowMobile from "@/Components/MyPaneFlowMobile";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-black/80">
      <main className="xl:flex-grow ">
        <div className="w-[90%] max-lg:hidden portrait:hidden max-lg:w-full mx-auto xl:p-5 max-lg:mt-10">
          <MyPaneFlow />
        </div>
        <div className="mt-15 xl:hidden">
          <MyPaneFlowMobile />
        </div>
        <AmazonOrigin />
        <div className="relative w-full">
          <div className="absolute inset-0 bg-adorns bg-cover bg-center rounded-xl opacity-40 pointer-events-none"></div>
          <Contacts>
            <EmailForm />
          </Contacts>
        </div>
      </main>
    </div>
  );
}
