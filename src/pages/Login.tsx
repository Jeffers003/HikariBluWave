import { InputEmail } from "../components/InputEmail";
import { LogoVertical } from "../components/LogoVertical";
export default function Login() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-col   sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <LogoVertical />
          </div>

          <h2
            className="mt-10 text-center text-2xl font-bold tracking-tight"
            style={{ fontFamily: "Audiowide" }}
          >
            FAÇA <span className="text-[#046AEE]">LOGIN</span>
          </h2>
          <p style={{ color: "gray" }} className="mt-2 text-center text-sm/6">
            Entre na sua conta para continuar
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div style={{ color: "#046AEE" }}>
              <div className="mt-2">
                <InputEmail />
              </div>
            </div>

            <div>
              <div
                style={{ color: "#046AEE" }}
                className="flex items-center justify-between"
              ></div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#046AEE] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-[#046AEE]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                ENTRAR
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Ainda não tem uma conta? <br />{" "}
            <a
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              <span style={{ color: "#046AEE" }}>CRIAR CONTA</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
