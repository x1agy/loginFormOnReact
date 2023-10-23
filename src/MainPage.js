import { Link } from "react-router-dom";
import "./index.css"

function Main() {

    const userForm = document.querySelector("form")
    async function welcomeUser(e){
        e.preventDefault();
        const users = await ( await fetch("http://localhost:8000/users")).json();
        if(users.find(item => item.login == userForm.login.value && item.password == userForm.password.value)){
            users.map(item => {
                if(item.login == userForm.login.value){
                    alert(`Hello ${item.name}`)
                }
            })
        }
        else{
            alert("Неправильный логин или пароль")
        }
    }

    return (
      <div className="Main">
        <h1>Вход</h1>
        <form action="">
          <input name="login" type="text" placeholder='Login' />
          <input name="password" type="text" placeholder='Password' />
          <button onClick={welcomeUser}>Submit</button>
        </form>
        <Link to="/register">Регистрация</Link>
      </div>
    );
  }
  
  export default Main;