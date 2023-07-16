import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

const CreateProductForm = () => {
  const { handleSubmit, control } = useForm();
  const {
    fields: detailProduct,
    append: detailProductAppend,
    remove: detailProductRemove,
  } = useFieldArray({
    control,
    name: "detailProduct",
  });
  const onsubmit = (data) => console.log(data);
  return (
    <div className="container m-auto my-4">
      Create Proudct:
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="flex items-center justify-center  py-4">
          <Controller
            name="Product"
            control={control}
            render={({ field }) => (
              <>
                <label htmlFor="">Product Name :</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-accent w-full max-w-xs input-sm mx-4 focus:outline-none"
                  {...field}
                />
              </>
            )}
          />
        </div>
        <div className="flex items-center justify-center py-4">
          <div className="dynamicFeils">
            {detailProduct?.map((elem, id) => (
              <div key={id} className="flex items-center justify-center">
                <Controller
                  name={`detailProduct[${id}][name]`}
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <>
                      <label htmlFor="">Product Details:</label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-accent w-full max-w-xs input-sm mx-4 focus:outline-none"
                        {...field}
                      />
                    </>
                  )}
                />
                {id >= 0 && (
                  <button
                    className="btn border-t-brand_warning btn-outline btn-xs"
                    onClick={(id) => detailProductRemove(id)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="buttonCotainer">
            <button
              className="btn btn-accent btn-sm"
              onClick={() =>
                detailProductAppend({
                  details: null,
                })
              }
            >
              Add Feilds
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
