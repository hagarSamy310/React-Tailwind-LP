import { categories } from "../data";
import { Typewriter } from "react-simple-typewriter";

export const Categories = () => {
	return (
		<div className="w-full flex flex-col xl:px-[120px] pl-5 pr-8 gap-10 xl:gap-6 mb-20">
			{[0, 2].map((startIndex) => (
				<div
					key={startIndex}
					className="w-full flex xl:flex-row flex-col items-center gap-12 xl:gap-20"
				>
					{categories
						.slice(startIndex, startIndex + 2)
						.map(({ image, label, width }, index) => (
							<div
								key={index}
								className={`flex flex-col items-center ${width} w-full group gap-6`}
							>
								{/* Image */}
								<img
									src={image}
									alt="piece of furniture"
									className="w-full max-w-sm md:max-w-md xl:max-w-full h-auto 
                            transition-transform duration-500 ease-in-out 
                            transform group-hover:scale-105 group-hover:shadow-2xl"
								/>

								{/* Label */}
								{label && (
									<div className="mt-6 md:mt-4 font-bold text-[18px] md:text-[22px] xl:text-[28px] text-black/70 leading-relaxed text-center md:text-left">
										<Typewriter
											words={label.split(". ").map((s) => s.trim())}
											loop={true}
											typeSpeed={50}
											deleteSpeed={30}
											delaySpeed={1000}
											cursor
											cursorStyle="|"
										/>
									</div>
								)}
							</div>
						))}
				</div>
			))}
		</div>
	);
};
