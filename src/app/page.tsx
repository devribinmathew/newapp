"use client";
import { useState } from 'react';
import Box from './box/Box';
import server from './axios/axios';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Clear category name when modal is closed
    setCategoryName('');
  };

  const handleSave = () => {
    alert('ok')
    server
      .post("/api/v1/addCategory", {catName:categoryName})
      .then((response) => {
        console.log("uploadResponse", response);
        alert("PDF uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading PDF: ", error);
        alert("Error uploading PDF.");
      });

    // Implement save logic here with the category name
    console.log('Category Name:', categoryName);
    closeModal();
  };

  return (
    <div className='p-6 bg-gray-200'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold'>Categories</h1>
        <button
          className='bg-orange-500 text-white px-4 py-2 rounded-md'
          onClick={openModal}
        >
          Add Category
        </button>
      </div>

      <main className="flex flex-wrap gap-4 md:gap-8 lg:gap-12">
        {/* Replace Box with appropriate components and props */}
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 w-72">
            <h2 className="text-xl font-bold mb-4">Add Category</h2>
            <label htmlFor="categoryName" className="block mb-2">
              Category Name:
            </label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full border p-2 mb-4"
            />
            <div className="flex justify-end">
              <button className="mr-2 px-4 py-2 bg-gray-300" onClick={closeModal}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
