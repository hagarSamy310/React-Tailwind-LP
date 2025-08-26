import { features } from "../data/index";

const Features = () => {
	return (
<div
  className="
    w-full 
    flex flex-col              /* mobile: stacked */
    md:grid md:grid-cols-2 md:gap-10   /* tablet: 2 columns */
    lg:flex lg:flex-row        /* large: back to row layout */
    lg:items-start items-center justify-between
    xl:gap-[100px] gap-20 
    xl:px-[175px] px-5 
    xl:my-[150px] my-20
  "
>
			{features.map((feature) => (
				<div key={feature.title} className="flex flex-col gap-[35px] xl:items-start items-center xl:text-left text-center">
					<img
						src={feature.icon}
						alt={feature.title}
						className="w-[35px] h-[35px] transition-transform duration-300 hover:scale-160"
					/>
					<div className="flex flex-col gap-[15px] xl:items-start items-center">
						<h3 className="font-bold text-[21px] text-dark">{feature.title}</h3>
						<p className="text-light font-300 xl:max-w-[240px] max-w-[80%] leading-[28px]">{feature.description}</p>
					</div>
				</div>
			))}
		</div>
	); 
};

export default Features;


