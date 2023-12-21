
function Box() {
  const initials = "ribin";
const firstLetter = initials.charAt(0).toUpperCase();
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
  <div className="flex items-center">
    <img
      className="w-20 h-20  rounded-full mb-4 md:mb-0 md:mr-4 "
      src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(firstLetter)}&backgroundColor=b6e3f4`}
      alt="User Avatar"
    />
    <h2 className="text-xl font-bold">Company Services</h2>
  </div>

  {/*   */}
  <p className="text-gray-600">Description goes here.</p>
  <p className="text-blue-500 font-bold">Total Number</p>
</div>

             
      
  )
}

export default Box
