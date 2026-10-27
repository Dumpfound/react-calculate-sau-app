import { Link } from "react-router";
import bmr from "./../assets/bmr.png";
import { useState } from "react";

export default function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl p-8 flex flex-col items-center shadow-xl bg-white">
        
        {/* หัวเรื่อง */}
        <h1 className="text-2xl font-bold text-blue-900">BMR Calculator</h1>
        <h3 className="text-base text-gray-500 mt-1">คำนวณ BMR</h3>

        {/* รูปไอคอน */}
        <img
          src={bmr}
          alt="bmr"
          className="w-28 h-28 mt-6 mb-6 object-contain"
        />

        {/* ฟอร์ม */}
        <form className="w-full flex flex-col gap-4">
          
          {/* น้ำหนัก */}
          <div>
            <label className="text-sm text-gray-600 font-kanit">
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* ส่วนสูง */}
          <div>
            <label className="text-sm text-gray-600 font-kanit">
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* อายุ */}
          <div>
            <label className="text-sm text-gray-600 font-kanit">
              ป้อนอายุ (ปี)
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* เพศ */}
          <div>
            <p className="text-sm text-gray-600 font-kanit mb-2">เพศ:</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="font-kanit">ชาย</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="font-kanit">หญิง</span>
              </label>
            </div>
          </div>

          {/* ปุ่มคำนวณ + รีเซ็ต */}
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition"
            >
              คำนวณ BMR
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 rounded-lg transition"
            >
              รีเซ็ต
            </button>
          </div>
        </form>

        {/* ผลลัพธ์ (ยังไม่คำนวณ) */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 font-kanit">
            ค่า BMR ที่คำนวณได้:{" "}
            <span className="text-xl font-bold text-blue-800">0.00</span>
          </p>
        </div>

        {/* ปุ่มกลับหน้าหลัก */}
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