import { Mail, Phone, Globe, FolderGit, UserRoundSearch } from "lucide-react";
export default function App() {
  return (
    // <div className="flex justify-center h-screen">
    <div className="px-5 pt-20 pb-5 bg-[#f8fbfc]">
      <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-7xl h-auto">
        <div className="container bg-[#303846] h-auto w-full rounded-t">
          <div className=" pt-12 pl-11">
            <h1 className="text-5xl text-white font-light">Alwin Santhosh S</h1>
          </div>
          <div className="text-[#979BA2] flex flex-row pt-4 pl-5 pb-10 pr-6 justify-evenly font-[3px] w-3/4">
            <p className="flex flex-row justify-center ">
              <Mail
                className="mr-2 mt-0.5 rounded-full"
                size={20}
                fill="#979BA2"
                color="#303846"
              />{" "}
              <span>
                <a href="mailto:alwsan24@gmail">alwsan24@gmail.com</a>
              </span>
            </p>
            <p className="flex flex-row justify-center ">
              <Phone
                className="mr-2 mt-0.5 rounded-full"
                size={20}
                fill="#979BA2"
                color="#303846"
              />{" "}
              <span>
                <a href="tel:+91 904 336 5282">+91 - 904 336 5282</a>
              </span>
            </p>
            <p className="flex flex-row justify-center ">
              <Globe
                className="mr-2 mt-0.5 rounded-full"
                size={20}
                fill="#979BA2"
                color="#303846"
              />{" "}
              <span>
                <a
                  href="https://automationblog.github.io/myprofile/"
                  target="_blank"
                >
                  Profolio
                </a>
              </span>
            </p>
            <p className="flex flex-row justify-center ">
              <FolderGit
                className="mr-2 mt-0.5 rounded-full"
                size={20}
                fill="#979BA2"
                color="#303846"
              />{" "}
              <span>
                <a href="https://github.com/AutomationBlog" target="_blank">
                  GitHub
                </a>
              </span>
            </p>
            <p className="flex flex-row justify-center ">
              <UserRoundSearch
                className="mr-2 mt-0.5 rounded-full"
                size={20}
                fill="#979BA2"
                color="#303846"
              />{" "}
              <span>
                <a
                  href="https://www.linkedin.com/in/alwin-santhosh-3190ba12b/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
