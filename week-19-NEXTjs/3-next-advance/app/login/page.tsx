export default function LoginPage() {

    // accessing environment variables
    console.log(process.env.DB_URL);;
    console.log(process.env.API_SECRET);
    
    
   return <div>
        <h2>
            Login page
        </h2>
    </div>
}