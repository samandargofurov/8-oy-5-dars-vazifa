import { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import "./App.css";

interface PhoneType {
  id: string;
  name: string;
  description: string;
  price: number;
  status: string;
  category_id: string;
  createdAt: string;
  updatedAt: string;
}

interface BeingDeletedType {
  id?: string;
  beingDelete?: boolean;
}

function App() {
  const [data, setData] = useState<PhoneType[]>([]);
  const [beingDeleted, setBeingDeleted] = useState<BeingDeletedType>({id: '', beingDelete: false});

  async function getData(url: string) {
    const resp = await fetch(url);
    const dd = await resp.json();

    setData(dd);
  }

  useEffect(() => {
    getData("https://auth-rg69.onrender.com/api/products/all");
  }, []);

  function removeItem(id: string) {
    if (id) {
      setBeingDeleted({id: id, beingDelete: true})
      fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((d) => {
          if (d.message == "Mahsulot muvaffaqiyatli o'chirildi") {
            let copied = JSON.parse(JSON.stringify(data));
            copied = copied.filer((el: PhoneType) => {
              return el.id != id;
            });
            setData(copied);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setBeingDeleted({id: id, beingDelete: false})
        })
    }
  }

  return (
    <>
      <div className="container mx-auto w-2/3">
        <Form></Form>

        <div className="card-wrapper flex flex-wrap gap-5 justify-center">
          {data.length &&
            data.map((phone) => {
              return (
                <Card
                  beingDelete={beingDeleted}
                  rmFunction={removeItem}
                  data={phone}
                ></Card>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
