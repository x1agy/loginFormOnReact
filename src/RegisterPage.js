
import "./index.css"
function Register(){

    const userForm = document.querySelector("form")
    async function addNewUser(e){
        try{
            e.preventDefault();
            const users = await ( await fetch("http://localhost:8000/users")).json();
            
            if(users.find(item => item.login == userForm.login.value)){
                alert("Такой пользователь уже существует")
            }
            else if(userForm.nickname.value == "" || userForm.login.value == "" || userForm.password.value ==""){
                alert("Заполните все поля")
            }
            else{
                await fetch("http://localhost:8000/users", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        login: userForm.login.value,
                        password: userForm.password.value,
                        name: userForm.nickname.value
                    })
                })
                window.location.replace("/")
            }
        }
        catch(err){
            alert("Заполните все поля")
        }

    }

    return(
        <div className="register">
            <h2>Регистрация</h2>
            <form action="">
                <input name="nickname" required type="text" placeholder="Nickname" />
                <input name="login" required type="text" placeholder="Login" />
                <input name="password" required type="text" placeholder="Password" />
                <button onClick={addNewUser}>Submit</button>
            </form>
        </div>
    )
}

export default Register;