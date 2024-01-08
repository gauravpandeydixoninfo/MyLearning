// for local variable we have to make file of .env.local and write there local variable,
// and we can use the variable made in .env.local by process.env.{name of variable}

export default function Page(){
    return(
        <div>
            <h1>This is for checking local variable {process.env.MY_NAME  }</h1>
        </div>
    )
}