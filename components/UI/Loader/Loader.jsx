// Librairies

// Components

// Fonction Loader()
export const Loader = () => {
  return (
    <div className='fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col'>
      <div className='animate-spin'>۞</div>
      <p className='mt-[20px] font-epilogue font-bold text-[20px] text-white text-center'>
        In progress <br />
        <b>Please wait...</b>
      </p>
    </div>
  );
};
