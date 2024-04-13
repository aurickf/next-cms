import { ICustomCard } from "../utils/dataType";

const CustomCard = (props: ICustomCard) => {
  return <div className="custom-card">{props.children}</div>;
};

export default CustomCard;
