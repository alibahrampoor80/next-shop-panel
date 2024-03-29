import vazirFont from "@/constants/localFonts";
import '../../globals.css'
import Header from "@/pages/Header";
import {Toaster} from "react-hot-toast";
import Provider from "@/pages/Provider";
import SideBar from "@/pages/(profile)/profile/SideBar";


export const metadata = {
    title: 'صفحه ی پنل کاربر', description: 'Generated by ali bahrampoor',
}

export default function RootLayout({children}) {
    return (
        <html lang="fa" dir={'rtl'}>
        <body className={`${vazirFont.variable} font-sans`} suppressHydrationWarning={true}>
        <Provider>
            <div className="grid grid-cols-4 bg-white h-screen">
                <div className="col-span-1 bg-gray-100 overflow-y-auto ">
                    <SideBar/>
                </div>
                <div className="col-span-3 overflow-y-auto p-4">
                    {children}
                </div>
            </div>
            <Toaster/>
        </Provider>
        </body>
        </html>
    )
}