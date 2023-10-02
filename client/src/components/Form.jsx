import React, { useRef, useState } from "react";
import axios from "axios";
import { BASE_URL, convertToSendFormat } from "../Consts";
import { toast } from "react-toastify";

const inputConClasses =
	"flex flex-col gap-2 my-2 p-2 bg-white w-[340px] sm:w-[480px]";

const InitialFormState = {
	name: "",
	acn: "",
	bank: "",
	address1: "",
	address2: "",
	city: "",
	country: "",
	zip: "",
	_id: "",
};

const Form = ({ usefor = "create", data = InitialFormState }) => {
	const [formData, setFormData] = useState(data);
	const errorRef = useRef(null);
	const id = data["_id"];

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const checkValidation = () => {
		errorRef.current.classList.add("invisible");
		const reqInputs = document.querySelectorAll("input:required");
		for (const reqInput of reqInputs) {
			if (reqInput.validity.valid === false) return false;
		}
		return true;
	};

	const checkAccNo = () => {
		return false;
	};

	const handleCreate = (e) => {
		const isValid = checkValidation();
		console.log(isValid);
		if (isValid) {
			console.log({ ...formData });
			const isACNoexist = checkAccNo(formData.acn);
			if (isACNoexist) {
				console.log(errorRef.current);
				errorRef.current.innerText = "Account number already exists.";
				errorRef.current.classList.remove("invisible");
				return;
			}
			createVendor(formData);
		} else {
			errorRef.current.innerText = "Please fill all required fields.";
			errorRef.current.classList.remove("invisible");
		}
	};

	const handleUpdate = (e) => {
		const isValid = checkValidation();
		console.log(isValid);
		if (isValid) {
			console.log({ ...formData });
			const isACNoexist = checkAccNo(formData.acn);
			if (isACNoexist) {
				console.log(errorRef.current);
				errorRef.current.innerText = "Account number already exists.";
				errorRef.current.classList.remove("invisible");
				return;
			}
			updateVendor(formData);
		} else {
			errorRef.current.innerText = "Please fill all required fields.";
			errorRef.current.classList.remove("invisible");
		}
	};

	const createVendor = async (data) => {
		const dataTosend = convertToSendFormat(data);
		await SendToServer(dataTosend);
	};

	const updateVendor = async (data) => {
		const dataTosend = convertToSendFormat(data);
		await SendToServer(dataTosend);
	};

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const SendToServer = async (data) => {
		try {
			setIsLoading(true);
			setError(null);
			if (usefor == "create") {
				const response = await axios.post(`${BASE_URL}/vendors`, {
					data: data,
				});
				toast("Vendor Created.");
				setFormData({ ...InitialFormState });
			} else {
				const response = await axios.put(`${BASE_URL}/vendors/${id}`, {
					toupdate: data,
				});
				toast("Vendor Updated.");
			}
			// console.log(response.data);
			setIsLoading(false);
		} catch (err) {
			toast.error("Some error! Please try later.");
			setError(true);
			setIsLoading(false);
		}
	};

	return (
		<div className="p-5 pb-28 flex items-center justify-center bg-[rgba(0,0,0,0.1)]">
			<div className="p-6 sm:p-10 bg-white shadow">
				<div className={inputConClasses + ""}>
					<label
						className="after:content-['*'] after:text-red-500 font-semibold text-slate-600"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className=" border rounded p-2 outline-1 outline-blue-400 custom-input-style"
						type="text"
						name="name"
						pattern="[a-zA-Z\s]*"
						required
						placeholder="Jhon Doe"
						onChange={handleChange}
						value={formData.name}
					/>
				</div>
				<div className={inputConClasses + ""}>
					<label
						className="after:content-['*'] after:text-red-500 font-semibold text-slate-600"
						htmlFor="acn"
					>
						Account Number
					</label>
					<input
						className="w-full tracking-widest placeholder:tracking-widest border rounded p-2 outline-1  outline-blue-400 custom-input-style"
						type="text"
						name="acn"
						pattern="[0-9]{14}"
						required
						maxLength={14}
						placeholder="44446666222255"
						onChange={handleChange}
						value={formData.acn}
						disabled={usefor == "create" ? false : true}
						title={
							usefor == "create"
								? "Please fill out this field"
								: "Account number cant be changed"
						}
					/>
				</div>
				<div className={inputConClasses}>
					<label
						className="after:content-['*'] after:text-red-500 font-semibold text-slate-600"
						htmlFor="bank"
					>
						Bank Name
					</label>
					<input
						className=" border rounded p-2 outline-1 outline-blue-400 custom-input-style"
						type="text"
						name="bank"
						pattern="[a-zA-Z\,\s]*"
						required
						placeholder="Test Bank Of India"
						onChange={handleChange}
						value={formData.bank}
					/>
				</div>
				<div className={inputConClasses}>
					<label
						className=" font-semibold text-slate-600"
						htmlFor="address1"
					>
						Address Line-1
					</label>
					<input
						className=" border rounded p-2 outline-1 outline-blue-400"
						type="text"
						name="address1"
						onChange={handleChange}
						value={formData.address1}
					/>
				</div>
				<div className={inputConClasses}>
					<label
						className=" font-semibold text-slate-600"
						htmlFor="address2"
					>
						Address Line-2
					</label>
					<input
						className=" border rounded p-2 outline-1 outline-blue-400"
						type="text"
						name="address2"
						onChange={handleChange}
						value={formData.address2}
					/>
				</div>
				<div className={inputConClasses}>
					<label
						className=" font-semibold text-slate-600"
						htmlFor="city"
					>
						City
					</label>
					<input
						className=" border rounded p-2 outline-1 outline-blue-400"
						type="text"
						name="city"
						onChange={handleChange}
						value={formData.city}
					/>
				</div>
				<div className={inputConClasses}>
					<label
						className=" font-semibold text-slate-600"
						htmlFor="country"
					>
						Country
					</label>
					<input
						className=" border rounded p-2 outline-1 outline-blue-400"
						type="text"
						name="country"
						onChange={handleChange}
						value={formData.country}
					/>
				</div>
				<div className={inputConClasses}>
					<label
						className=" font-semibold text-slate-600"
						htmlFor="zip"
					>
						Zip Code
					</label>
					<input
						className=" border rounded p-2 outline-1 outline-blue-400"
						type="text"
						name="zip"
						maxLength={6}
						pattern="[0-9]{6}"
						onChange={handleChange}
						value={formData.zip}
					/>
				</div>
				<p
					ref={errorRef}
					className="errormsg my-3 text-sm text-red-500 invisible"
				>
					Please fill all required fields
				</p>
				{/* {error && <p className=" text-sm text-red-500">{error}</p>} */}
				<div className=" w-full flex items-center justify-around my-6">
					{usefor == "create" ? (
						<button
							onClick={handleCreate}
							className="px-3 py-2 text-slate-100 font-semibold hover:scale-110 active:scale-90 transition-all bg-green-400 rounded"
						>
							{isLoading ? "wait..." : "Create"}
						</button>
					) : (
						<button
							onClick={handleUpdate}
							className="px-3 py-2 text-slate-100 font-semibold hover:scale-110 active:scale-90 transition-all bg-sky-500 rounded"
						>
							{isLoading ? "wait..." : "Update"}
						</button>
					)}
					<button
						onClick={() => window.history.back()}
						className="px-3 py-2 text-slate-100 font-semibold hover:scale-110 active:scale-90 transition-all bg-slate-500 rounded"
					>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default Form;
