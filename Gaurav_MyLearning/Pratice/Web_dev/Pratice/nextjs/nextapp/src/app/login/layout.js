"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname();
    return (
        <div>
            {
                pathName !== "/login/loginStudent" ?
                    <div>
                        <ul>
                            <li>
                                <Link href="/login">This is login main</Link>
                            </li>
                            <li>
                                <Link href="/login/loginStudent">This is login student</Link>
                            </li>
                            <li>
                                <Link href="/login/loginCollege">This is login college</Link>
                            </li>
                        </ul>
                        {children}
                    </div>
                    :
                    null
            }
        </div>
    )
}