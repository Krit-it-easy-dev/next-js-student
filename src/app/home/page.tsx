import Image from 'next/image';
import "../../styles/home.css"

export default function Home() {
    return (
        <main className="student-header Content font-Pathway">
            <div className="student-header-content">
                <p>Hello!</p>
                <h1>I'm Bishwahang</h1>
                <h2>I'm a Frontend Developer</h2>
                <div className="header-content-detail">
                    <p>Hello, my name is Bishwahang Dewan and I am a front-end developer with 4 years of experience in creating and designing user-friendly websites and web applications.</p>
                </div>
            </div>
            <div className="student-header-right">
                <Image src="/profile.png" alt="Advertisement" width={1000} height={1000} />
            </div>
        </main>
    )
}
