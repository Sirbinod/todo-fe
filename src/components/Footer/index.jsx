const Footer = () => {
  return (
    <>
      <hr class="mt-8 mb-4 border-gray-200 sm:mx-auto dark:border-gray-700 " />
      <footer className="container">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Todo
            </a>
            . All Rights Reserved.
          </span>
          <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <h1>To-DO(Sarbin Shrestha)</h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
