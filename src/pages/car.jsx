import { Link } from "react-router";
import car from "./../assets/car.png";
import { useState } from "react";

export default function Car() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [interest, setInterest] = useState("");
  const [downPercent, setDownPercent] = useState("15");
  const [months, setMonths] = useState("24");
  const [resultName, setResultName] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("0.00");

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!price || !interest) return;

    const carPrice = parseFloat(price);
    const interestRate = parseFloat(interest) / 100;
    const down = carPrice * (parseFloat(downPercent) / 100);
    const financeAmount = carPrice - down;
    const years = parseInt(months) / 12;
    const totalInterest = financeAmount * interestRate * years;
    const totalPayment = financeAmount + totalInterest;
    const monthly = totalPayment / parseInt(months);

    setResultName(name || "-");
    setMonthlyPayment(
      monthly.toLocaleString("th-TH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  const handleReset = () => {
    setName("");
    setPrice("");
    setInterest("");
    setDownPercent("15");
    setMonths("24");
    setResultName("");
    setMonthlyPayment("0.00");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl p-8 flex flex-col items-center shadow-xl bg-white">
        
        <h1 className="text-2xl font-bold text-blue-900 text-center">
          Car Installment Calculator
        </h1>
        <h3 className="text-base text-gray-500 mt-1">คำนวณ Car Installment</h3>

        <img
          src={car}
          alt="car"
          className="w-28 h-28 mt-6 mb-6 object-contain"
        />

        <form onSubmit={handleCalculate} className="w-full flex flex-col gap-4">
          
          <div>
            <label className="text-sm text-gray-600 font-kanit">ชื่อผู้คำนวณ</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-kanit">ราคารถ (บาท)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-kanit">ดอกเบี้ยต่อปี (%)</label>
            <input
              type="number"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <p className="text-sm text-gray-600 font-kanit mb-2">เงินดาวน์ (%)</p>
            <div className="flex flex-wrap gap-4">
              {["15", "20", "25", "30", "35"].map((value) => (
                <label key={value} className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="downPercent"
                    value={value}
                    checked={downPercent === value}
                    onChange={(e) => setDownPercent(e.target.value)}
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span className="text-sm">{value}%</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600 font-kanit">จำนวนเดือนที่ผ่อน</label>
            <select
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
              <option value="84">84 เดือน</option>
            </select>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition"
            >
              คำนวณ
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2.5 rounded-lg transition"
            >
              ล้างข้อมูล
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700 font-kanit font-medium">
            {resultName || "ชื่อผู้คำนวณ"}
          </p>
          <p className="text-gray-600 font-kanit mt-1">
            ผ่อนชำระเดือนละ{" "}
            <span className="text-xl font-bold text-blue-800">{monthlyPayment}</span>{" "}
            บาท
          </p>
        </div>

        <Link
          to="/"
          className="w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2.5 rounded-lg mt-6 transition"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </div>
  );
}