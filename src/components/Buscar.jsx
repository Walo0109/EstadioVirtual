import style from "./../css/buscar.module.css";



export const Buscar = () => {
  return (
    <div className={style.buscarCancha}>
      <div className={style.container}>
        <input type="text" className={style.imput} placeholder="Buscar cancha" />
        <input type="text" className={style.imput} placeholder="Buscar cancha" />
        <div className="">
          <input type="text" placeholder="Buscar cancha" />
          <input type="text" placeholder="Buscar cancha" />
        </div>

      </div>
    </div>
  );
}