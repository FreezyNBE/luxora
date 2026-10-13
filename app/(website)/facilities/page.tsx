import TopLayout from "@/app/components/TopLayout";
import { Fragment } from "react/jsx-runtime";

export default function FacilityPage() {
    return (
        <div className="w-full">
            <TopLayout
                imgUrl="/img/tmp2.png"
                title="Our Facilities"
                description="Designed entirely for your comfort, relaxation and enjoyment."
            />

            <div className="py-10 px-5 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <Fragment key={i}>
                        <div className="w-full max-h-100 flex flex-col border border-border-light shadow-lg rounded-lg overflow-hidden hover:-translate-y-3 hover:bg-gold-light/30 hover:border-transparent cursor-pointer transition-all duration-500">
                            <div className="w-full h-full max-h-50 overflow-hidden">
                                <img src={i % 2 ? "/img/tmp1.png" : "/img/tmp3.png"} alt="Tmp1" className="object-cover" />
                            </div>
                            <div className="px-5 py-5">
                                <h1 className="text-xl font-semibold tracking-wide">Swimming Pool</h1>
                                <span className="text-sm text-heading">Outdoor pool with relaxing view.</span>
                            </div>
                        </div>
                        <div className="w-full max-h-100 flex flex-col border border-border-light shadow-lg rounded-lg overflow-hidden hover:-translate-y-3 hover:bg-gold-light/30 hover:border-transparent cursor-pointer transition-all duration-500">
                            <div className="w-full h-full max-h-50 overflow-hidden">
                                <img src={i % 2 ? "/img/tmp1.png" : "/img/tmp3.png"} alt="Tmp1" className="object-cover" />
                            </div>
                            <div className="px-5 py-5">
                                <h1 className="text-xl font-semibold tracking-wide">Restaurant</h1>
                                <span className="text-sm text-heading">Eat delicious local and international food.</span>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}
