import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  const {register, handleSubmit} = useForm();


  const enviarDatos = (data) => {
    console.table(data)
    // fetch('http//:localhost:3000/api/login',{
    //     method : 'POST',
    //     headers : {
    //         "Content-Type": "application/json",
    //     },
    //     body : JSON.stringify(data)
    // }).then(async(response)=>{
    //     if(!response.ok) throw new Error({msg : 'Error'})
    //     const login = await response.JSON(response)
    //     return login
    // })
    // .then(data=>{
    //     setUsuario(data)
    //     window.localStorage.setItem('persistencia',data)
    // })
    // .catch(e=> console.log(e))
  }

  return (
    <section className="w-full h-screen flex justify-center items-center flex-col">
        <h1 className=" mb-5 text-3xl">Inicio De Sesion</h1>
      <form onSubmit={handleSubmit(enviarDatos)}>
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Usuario"
            className="p-3 rounded border focus:outline-none focus:ring-blue-500"
            {...register('usuario')}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="p-3 rounded border focus:outline-none focus:ring-blue-500"
            {...register('contraseña')}
          />
          <button  onClick={() => navigate('/section')} className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-blue-500">
            Ingresar
          </button>
        </div>
        <p>No tienes cuenta? <span onClick={() => navigate('/registro')} className="text-blue-500">Registrate</span></p>
      </form>
    </section>
  );
};

export default Login;
