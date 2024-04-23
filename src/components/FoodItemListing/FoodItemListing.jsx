import FoodItemCard from "../FoodItemCard/FoodItemCard";
import { useState } from "react";
import { MdExpandLess ,MdExpandMore } from "react-icons/md";

const FoodItemListing = ({ product, parentId }) => {
  const [accordion, setAccordion] = useState(true);

  // Extract items info from the product
  const itemsInfo = product?.card?.card?.itemCards;
  return (
    <>
      {itemsInfo && (
        <div className="AccordionContainer my-3"
         
        >
          <div className="AccordianHeadingContainer py-4 pl-3 pr-3 sm:pr-10 font-medium sm:font-bold sm:text-xl cursor-pointer border-2 flex items-center justify-between"
          onClick={() => setAccordion(!accordion)}
          >
            <span className="AccordionHeading">
              {product.card.card.title} ({itemsInfo.length})
            </span>
            <span className="AccordionButton">
              {accordion ? <MdExpandLess className="size-7" /> : <MdExpandMore  className="size-7" /> }
            </span>
          </div>
          <div
            className={` flex flex-col overflow-hidden ${
              accordion ? "block" : "hidden"
            }`}
          >
            {itemsInfo.map((item, index) => (
              <FoodItemCard
                key={index}
                iteminfo={item.card.info}
                parentId={parentId}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FoodItemListing;
