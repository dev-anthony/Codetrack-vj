import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className=" border-[#a31621] bg-gradient-to-r from-[#fcg9g9] to-[#a31621] border-t text-white text-center py-10 ">
            <p className="text-sm text-[#a31621] ">
                &copy; {currentYear} Code &lt;30&gt;. All rights reserved.
            </p>
        </footer>
    );
}