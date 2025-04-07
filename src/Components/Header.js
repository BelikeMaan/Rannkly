import React from "react";
import { Search, Bell } from "lucide-react";


const Header = () =>{
    return (
    <div className="grid grid-flow-col">
        <div className="col-span-10">
             <h2 className="text-lg font-medium mb-4">Good Morning, Nidaant</h2>
        </div>
        <div className="flex col-span-2 gap-4">
            <Search className="w-8 h-8 text-gray-600 cursor-pointer" />
            <Bell className="w-8 h-8 text-gray-600 cursor-pointer" />
                <div className="flex items-center gap-2 pb-4">
                 <img className="h-8 w-8 rounded-full" alt="Profile" src="https://s3-alpha-sig.figma.com/img/3f9b/c6f3/57bfd9234a83f1159e7b9768876affbc?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZsR1djvN4FsLntFELPW3h7xAEFTNXIKOla6OCu8V769907efronQZTZsAww-nmEYCdy5T9GHD2KtziTYUcEbakY7K5cxh0rNZiYmI4beeLkjdaLQp6Xl7GTYqSY7FMSkxl3piSoe23CGxASSPZIRZ7CXNLbZDyMiBBpqUgt0JpaUfs0z-L6-FCa~JcHMYgxBLGmo13s2QnfDV8IkMNzqXTQQDFnbqZqrFUNBDdLk2vxHPmzz8TrRey4~E-6joD44RY6CkuAu~JjePwjzwnyp5R9HduezDdlM3T0DyQbbWghHQ-zMYul~VG34n~nuVSvLbDBqi28G~jgK9QTH6NDMMQ__" />
                    <div className="text-sm">
                            <div className="font-medium">Nidaant</div>
                            <div className="text-xs text-gray-500">nidaant@gmail.com</div>
                    </div>
                </div>
        </div>
    </div>
    );
};
export default Header;