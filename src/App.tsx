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

interface PhoneTypeCreate {
  name: string | undefined | number | null;
  price: number | undefined | string | null;
  description: string | undefined | number | null;
  status: string | number | null;
  category_id: string | null | number;
}

function App() {
  const [data, setData] = useState<PhoneType[]>([]);
  const [beingDeleted, setBeingDeleted] = useState<BeingDeletedType>({
    id: "",
    beingDelete: false,
  });

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
      setBeingDeleted({ id: id, beingDelete: true });
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
          setBeingDeleted({ id: id, beingDelete: false });
        });
    }
  }

  function handleSave(phone: PhoneTypeCreate) {
    phone.status = 'active'
    phone.category_id = '2'

    fetch('https://auth-rg69.onrender.com/api/products/', {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(phone)
    })
    .then(res => res.json())
    .then(dd => {
      if(dd.id) {
        let copied = JSON.parse(JSON.stringify(data))
        copied.push(dd)
        setData(copied)
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <div className="container mx-auto w-2/3 mb-10">
        <Form save={handleSave}></Form>

        <div className="card-wrapper flex flex-wrap gap-5 justify-center">
          {data.length &&
            data.map((phone, index) => {
              return (
                <Card
                  beingDelete={beingDeleted}
                  key={index}
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
