import { ContactLeafIcon } from "@/assets/icons/ContactLeafIcon";
import CustomButton from "@/components/kit/CustomButton";
import CustomTextArea from "@/components/kit/CustomTextArea";
import CustomTextBox from "@/components/kit/CustomTextBox";
import Image from "next/image";

export default function Index() {
    return <div className="w-full flex flex-col xl:flex-row max-w-[1135px] justify-between xl:h-[550px] m-auto bg-white mt-[102px] overflow-hidden xl:rounded-[30px]">
        <form className="w-full self-start xl:w-[655px] h-auto grid grid-cols-1 xl:grid-cols-2 gap-[16px] xl:gap-y-[10px] px-[46px] py-[40px]">
            <div className="xl:col-span-2 mb-[30px]">
                <div className="bg-[#F5F5F5] text-primary w-[176px] h-[30px] text-[14px] font-bold flex justify-center items-center rounded-full">
                    <ContactLeafIcon className="w-[20px]" />
                    با من تماس بگیرید</div>
                <h2 className="col-span-2 mt-[19px] text-[px] xl:text-[36px] text-primary font-bold">
                    سوالی دارید؟ با ما تماس بگیرید
                </h2>
            </div>
            <div>
                <span className="text-sm font-bold text-primary">نام</span>
                <CustomTextBox placeholder="نام خود را وارد کنید" onChange={() => { }} />
            </div>
            <div>
                <span className="text-sm font-bold text-primary">شماره موبایل</span>
                <CustomTextBox placeholder="شماره خود موبایل را وارد کنید" onChange={() => { }} />
            </div>
            <div>
                <span className="text-sm font-bold text-primary">ایمیل</span>
                <CustomTextBox placeholder="ایمیل خود را وارد کنید" onChange={() => { }} />
            </div>
            <div>
                <span className="text-sm font-bold text-primary">عنوان</span>
                <CustomTextBox placeholder="عنوان را وارد کنید" onChange={() => { }} />
            </div>
            <div className="xl:col-span-2">
                <span className="text-sm font-bold text-primary">توضیحات</span>
                <CustomTextArea onChange={() => { }} />
            </div>
            <div className="xl:col-span-2">
                <CustomButton className="w-[102px]">ارسال کنید</CustomButton>
            </div>

        </form>
        <Image width={470} height={751} src="/assets/img/contact/form-bg.jpg" alt="" />
    </div>
}
