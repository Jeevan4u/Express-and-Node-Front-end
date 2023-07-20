import React, { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../features/api/productApi";

const EditProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetProductByIdQuery(id);

  if (isLoading || !isSuccess) {
    return (
      <div className="loadingSpinner h-screen w-screen bg-neutral_background flex justify-center items-center">
        <span class="loader"></span>
      </div>
    );
  }

  return (
    <div className="container m-auto my-4">
      Edit Proudct:
      <FormEdit formDetails={data?.data?.product} id={id} />
    </div>
  );
};

const FormEdit = ({ formDetails, id }) => {
  const navigate = useNavigate();

  const [
    updateProduct,
    { isLoading: updateLoading, isSuccess: updateSuccess },
  ] = useUpdateProductMutation();
  useEffect(() => {
    if (updateSuccess) {
      navigate("/dashboard");
    }
  }, [updateSuccess]);

  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: formDetails?.name,
      price: formDetails?.price,
      category: formDetails?.category,
      image: "null",
    },
  });
  const {
    fields: discriptionFeild,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "discription",
  });
  const submit = (data) => {
    const { name, price, category, discription } = data;
    // const discriptionArray = discription.map((elem) => elem.title);
    const payload = {
      name,
      price,
      category,
      discription,
    };
    updateProduct({ id: id, payload });
  };
  return (
    <form
      className="container border p-4 flex justify-between "
      onSubmit={handleSubmit(submit)}
    >
      <div className="m-auto basis-[65%]">
        <div className="ProductName my-4">
          <Controller
            name="name"
            control={control}
            // rules={{
            //   required: "Enter Product Name Greater Than 3",
            //   minLength: 3,
            //   maxLength: 10,
            // }}
            render={({ field }) => (
              <>
                <label
                  htmlFor="name"
                  className={`${errors.name ? "text-brand_error" : null}`}
                >
                  Product Name
                </label>

                <input
                  {...field}
                  type="text"
                  placeholder="Enter Product Name"
                  className="input input-bordered input-accent w-full  mx-4"
                  // ref={register("name").ref}
                />
                {errors.name && (
                  <p className="text-xs pt-2">{errors.name.message}</p>
                )}
              </>
            )}
          />
        </div>
        <div className="ProductPrice my-4">
          <label
            htmlFor="name"
            className={`${errors.price ? "text-brand_error" : null}`}
          >
            Product Price:
          </label>
          <Controller
            name="price"
            control={control}
            // rules={{
            //   required: "Enter Product Price Greater Than 5000",
            //   min: 5000,

            //   minLength: 4,
            // }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="number"
                  placeholder="Enter Product Price"
                  className="input input-bordered input-accent w-full  mx-4"
                />

                {errors.price && (
                  <p className="text-xs pt-2">{errors.price.message}</p>
                )}
              </>
            )}
          />
        </div>
        <div className="ProductCategory my-4">
          <label
            htmlFor="name"
            className={`${errors.category ? "text-brand_error" : null}`}
          >
            Product Category:
          </label>
          <Controller
            name="category"
            control={control}
            // rules={{
            //   required: "Please Fill The Category Field",
            //   minLength: 3,
            // }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="text"
                  placeholder="Enter Product category"
                  className="input input-bordered input-accent w-full  mx-4"
                />
                {errors.category && (
                  <p className="text-xs pt-2">{errors.category.message}</p>
                )}
              </>
            )}
          />
        </div>
        {discriptionFeild?.map((elem, i) => (
          <section key={elem.id}>
            <div className="ProductDiscription my-4">
              <label>Product Descpition {i + 1}</label>
              <Controller
                name={`discription.${i}.title`}
                control={control}
                rules={{
                  required: "Please Fill The Discription Field",
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      placeholder="Enter Text"
                      className="input input-bordered input-accent w-full  mx-4"
                    />
                  </>
                )}
              />
              <button
                className="btn btn-outline btn-warning btn-sm my-2"
                onClick={() => remove(i)}
              >
                Remove Feild
              </button>
            </div>
          </section>
        ))}
        <div className="actionButton flex justify-between items-center">
          <button
            className="btn btn-accent btn-outline btn-sm mt-4  mx-4"
            // disabled={isLoading ? true : false}
            type="button"
            onClick={() => append({ title: "hellow" })}
          >
            Append
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-accent btn-outline btn-sm mt-4 w-full mx-4"
          // disabled={isLoading ? true : false}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default EditProduct;
