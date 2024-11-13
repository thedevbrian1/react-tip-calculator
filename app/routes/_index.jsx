import { useState } from "react";

export const meta = () => {
  return [
    { title: "Tip calculator" },
    { name: "description", content: "Calculate tips easily!" },
  ];
};

export default function Index() {
  // State variables
  let [billAmount, setBillAmount] = useState(null);
  let [tipPercentage, setTipPercentage] = useState(null);
  let [peopleQuantity, setPeopleQuantity] = useState(null);

  console.log({ billAmount });

  function calculateTip() {
    console.log("Calculating tip!");
  }

  return (
    <main className="grid place-items-center w-full min-h-screen">
      <div className="grid lg:grid-cols-2 gap-4 bg-white lg:max-w-5xl mx-auto rounded-xl p-10">
        <div className="text-gray-800">
          <Label htmlFor="bill">Bill amount (Ksh)</Label>
          <Input
            type="number"
            name="bill"
            id="bill"
            placeholder={1000}
            setBillAmount={setBillAmount}
          />

          <p className="mt-8 capitalize">Select tip %</p>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <Tip percentage={5} />
            <Tip percentage={10} />
            <Tip percentage={15} />
            <Tip percentage={25} />
            <Tip percentage={50} />

            <label className="bg-gray-200 flex gap-2 items-center justify-center px-4 py-2 rounded-md">
              <input type="radio" name="tip" />
              Custom
            </label>
          </div>
          <div className="mt-4">
            <Label htmlFor="people">Number of people</Label>
            <Input type="number" name="people" id="people" placeholder={2} />
          </div>
          <Button handleClick={calculateTip}>Calculate tip</Button>
        </div>

        <div className="bg-brand-teal p-8 rounded-xl">
          <div className="flex justify-between">
            <div>
              <p>Tip amount</p>
              <p className="text-gray-400 text-sm">/ per person</p>
            </div>
            <Amount amount="0.00" />
          </div>

          <div className="flex justify-between mt-6">
            <div>
              <p>Total</p>
              <p className="text-gray-400 text-sm">per person</p>
            </div>
            <Amount amount="0.00" />
          </div>

          <Button>Reset</Button>
        </div>
      </div>
    </main>
  );
}

// Tip component
function Tip({ percentage }) {
  return (
    <label className="px-4 py-2 rounded-md bg-brand-teal text-gray-200 flex gap-2 justify-center">
      <input type="radio" name="tip" value={percentage} />
      {percentage}%
    </label>
  );
}

// Input component
function Input({ type, name, id, placeholder, setBillAmount }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onBlur={(event) => setBillAmount(event.target.value)}
      className="px-3 py-2 w-full block bg-gray-200 text-gray-800 rounded-lg border border-slate-500"
    />
  );
}

// Label component
function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="text-sm capitalize">
      {children}
    </label>
  );
}

// Amount component
function Amount({ amount }) {
  return (
    <p className="text-brand-light-teal text-3xl font-semibold">${amount}</p>
  );
}

// Button component
function Button({ children, handleClick }) {
  return (
    <button
      type="button"
      className="bg-brand-light-blue px-6 py-3 uppercase text-gray-800 w-full mt-6 rounded-lg font-semibold"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
