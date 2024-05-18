import { FiTrash } from "react-icons/fi";
import { FC } from "react";

interface CardType {
  data: {
    id: string;
    name: string;
    description: string;
    price: number;
    status: string;
    category_id: string;
    createdAt: string;
    updatedAt: string;
  };
  rmFunction: (arg: string) => void;
  beingDelete: {
    id?: string;
    beingDelete?: boolean;
  };
}

const Card: FC<CardType> = (props) => {
  function handleRemove() {
    let isDelete = confirm("rostadan ham o'chirmoqchimisiz?");
    if (isDelete) {
      props.rmFunction(props.data.id);
    }
  }

  return (
    <>
      <div className="hover:shadow-2xl shadow-sm p-4 rounded-xl flex flex-col gap-1 hover:bg-slate-50 transition-all duration-700">
        <h3 className="text-gray-600 font-extralight">
          <span className="font-semibold text-black">Name: </span>
          {props.data.name}
        </h3>
        <p className="text-gray-600 font-extralight">
          <span className="font-semibold text-black">Price: </span>
          ${props.data.price}
        </p>
        <h3 className="text-gray-600 font-extralight">
          <span className="font-semibold text-black">Status: </span>
          {props.data.status}
        </h3>
        <p className="text-gray-600 font-extralight">
          <span className="font-semibold text-black">Description: </span>
          {props.data.description}
        </p>

        {
        !(props.beingDelete?.beingDelete && props.beingDelete?.id == props.data?.id) ? (
          <span
            className="text-red-600 text-xl w-5 mt-3 cursor-pointer"
            onClick={handleRemove}
          >
            <FiTrash></FiTrash>
          </span>
        ) : (
          "O'chirilmoqda"
        )}
      </div>
    </>
  );
};

export default Card;
