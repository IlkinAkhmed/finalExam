import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import axios from "axios";
import { toast } from "react-hot-toast";

function AddPage() {
  const [allData, setAllData] = useState(null);
  const [input, setInput] = useState("");
  const [sortedData, setSortedData] = useState(null);
  async function fetchAllData() {
    const res = await axios.get("http://localhost:5100/products/");
    setAllData(res.data);
  }
  async function postData(values) {
    await axios.post("http://localhost:5100/products/", values);
    await fetchAllData();
  }
  async function deleteData(id) {
    await axios.delete(`http://localhost:5100/products/${id}`);
    toast.success("Product deleted!!");
    await fetchAllData();
  }
  useEffect(() => {
    fetchAllData();
  });

  function checkTypeOfProperty(item) {
    if (typeof item === "string") {
      return item.toLowerCase();
    }
    return item;
  }
  return (
    <>
      <Helmet>
        <title>Home | AddPage</title>
      </Helmet>
      <div className="add">
        <h1>Post Data</h1>
        <Formik
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: "",
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .max(30, "Must be 30 characters or less")
              .required("Required"),
            price: Yup.number()
              .min(0.1, "Must be minimum 0.1 USD  or more")
              .required("Required"),
            description: Yup.string().required("Required"),
            category: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            postData(values);
            resetForm();
            setTimeout(() => {
              toast.success("Product Created");
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="form">
            <label htmlFor="title">Title</label>
            <Field className="input" name="title" type="text" />
            <div className="error">
              <ErrorMessage name="title" />
            </div>

            <label htmlFor="price">Price</label>
            <Field className="input" name="price" type="number" />
            <div className="error">
              <ErrorMessage name="price" />
            </div>

            <label htmlFor="description">Description </label>
            <Field className="input" name="description" type="text" />
            <div className="error">
              <ErrorMessage name="description" />
            </div>

            <label htmlFor="category">Category </label>
            <Field className="input" name="category" type="text" />
            <div className="error">
              <ErrorMessage name="category" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <h1>Products</h1>
        <div className="filter-area">
          <input
            type="text"
            placeholder="Search name..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() => setSortedData({ property: "title", asc: true })}
          >
            A-z
          </button>
          <button
            onClick={() => setSortedData({ property: "title", asc: false })}
          >
            z-A
          </button>
          <button
            onClick={() => setSortedData({ property: "price", asc: true })}
          >
            Price LOW to HIGH
          </button>
          <button
            onClick={() => setSortedData({ property: "price", asc: false })}
          >
            Price HIGH to LOW
          </button>
          <button onClick={()=>setSortedData(null)}>Default</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allData &&
              allData
                .filter((item) =>
                  item.title
                    .trim()
                    .toLowerCase()
                    .includes(input.trim().toLowerCase())
                )
                .sort((a, b) => {
                  if (sortedData && sortedData.asc) {
                    return checkTypeOfProperty(a[sortedData.property]) >
                      checkTypeOfProperty(b[sortedData.property])
                      ? 1
                      : checkTypeOfProperty(b[sortedData.property]) >
                        checkTypeOfProperty(a[sortedData.property])
                      ? -1
                      : 0;
                  } else if (sortedData && sortedData.asc === false) {
                    return checkTypeOfProperty(a[sortedData.property]) >
                      checkTypeOfProperty(b[sortedData.property])
                      ? -1
                      : checkTypeOfProperty(b[sortedData.property]) >
                        checkTypeOfProperty(a[sortedData.property])
                      ? 1
                      : 0;
                  } else {
                    return 0;
                  }
                })
                .map((item) => (
                  <tr>
                    <td>{item._id}</td>
                    <td>{item.title}</td>
                    <td>${item.price}.00</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>
                      <i
                        onClick={() => deleteData(item._id)}
                        className="fa-solid fa-trash-can"
                      ></i>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AddPage;
