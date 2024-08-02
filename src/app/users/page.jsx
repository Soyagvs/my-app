export default function UsersPage(){
    return(
        <main className="bg-[#6A77FF] w-full h-screen flex justify-center items-center">
            <div className="bg-[#FCFCFC] w-[472px] h-[595px] rounded-2xl font-bold flex flex-col justify-center items-center">
                <h1 className="text-black text-5xl font-bold text-center">Usuarios</h1>
                <form action="" className="flex flex-col justify-center items-start text-[#3F3F46] font-bold gap-5 mt-20 mb-10">
                    <label htmlFor="name" className="text-start" >Usuario/a</label>
                    <input type="text" name="text" id="text" className="w-[374px] h-[70px] bg-[#D9D9D9] rounded-md" required />

                    <label htmlFor="name">Contraseña</label>
                    <input type="password" name="password" id="password" className="w-[374px] h-[70px] bg-[#D9D9D9] rounded-md" required />
                    <button className="text-white w-60 h-14 bg-[#0516CF] rounded-md ml-[18%]">
                        Entrar
                    </button>
                </form>
                <p className="text-[#737272]">Eres administrador? <a href="/" className="text-[#9E44FF]">Haz click aqui</a></p>
            </div>
        </main>
    )
}