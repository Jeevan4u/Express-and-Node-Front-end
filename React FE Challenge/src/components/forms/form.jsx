import React, { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import { usePostProductMutation } from "../../features/api/productApi";
import { useNavigate } from "react-router-dom";

const CreateProductForm = () => {
  const navigate = useNavigate();
  const [postProduct, { data, isLoading, isSuccess }] =
    usePostProductMutation();
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: null,
      price: null,
      category: null,
      image: null,
    },
  });
  useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard");
    }
  }, [isSuccess]);
  const [imageData, setimageData] = useState("");
  const handleFileChange = (e) => {
    setimageData({
      ...imageData,
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  };
  const onsubmit = (data) => {
    const fdata = new FormData();
    fdata.append("name", data.name);
    fdata.append("price", data.price);
    fdata.append("category", data.category);
    fdata.append("avatar", imageData.file);
    postProduct(fdata);
  };
  return (
    <div className="container m-auto my-4">
      Create Proudct:
      <form
        className="container border p-4 flex justify-between "
        onSubmit={handleSubmit(onsubmit)}
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
          <div className="ImageContianer">
            <label>Select Image</label>

            <input
              type="file"
              accept="image/*"
              className="input input-bordered input-accent w-full  mx-4"
              name="avatar"
              id="image"
              onChange={handleFileChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-accent btn-outline btn-sm mt-4 w-full mx-4"
            disabled={isLoading ? true : false}
          >
            Submit
          </button>
        </div>
        <div className="previewCotianer basis-[25%]">
          {imageData.preview ? (
            <div className="imagePreview">
              <img
                src={imageData?.preview}
                className="aspect-square p-2 border object-cover"
                alt=""
              />
            </div>
          ) : (
            <>
              <p>Preivew Image : </p>
              <div className="overlay h-[340px] w-[340px] border bg-neutral_background"></div>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
