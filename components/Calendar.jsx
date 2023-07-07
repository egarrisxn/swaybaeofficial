"use client";
import React, { useEffect } from "react";

export default function Calendar() {
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="w-full rounded-lg shadow-lg">
          <div className="md:p-16 md:pb-12 p-5 rounded-lg shadow-lg">
            <div className="px-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold">October 2020</h1>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler ml-3 icon-tabler-chevron-right"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between pt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center">Mo</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center">Tu</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center">We</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center">Th</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center">Fr</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center">Sa</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-2xl font-medium text-center">Su</p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pt-6">
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td className="pt-6">
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td className="pt-6">
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">1</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">2</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl">3</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl">4</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">5</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">6</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">7</p>
                      </div>
                    </td>
                    <td>
                      <div className="w-full h-full">
                        <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                          <p className="text-2xl w-14 h-14 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full">
                            8
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">9</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl">10</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl">11</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">12</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">13</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">14</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">15</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">16</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl">17</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl">18</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">19</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">20</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">21</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">22</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">23</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl">24</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl">25</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">26</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">27</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">28</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">29</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                        <p className="text-2xl font-medium">30</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:py-8 py-5 md:px-16 px-5 bg-gray-50 rounded-b">
            <div className="px-4">
              <div className="border-b pb-4 border-gray-400 border-dashed">
                <p className="text-xs font-light leading-3 text-gray-500">
                  9:00 AM
                </p>
                <p className="text-lg font-medium leading-5 pt-2">
                  Zoom call with design team
                </p>
                <p className="text-sm pt-2 leading-4 text-gray-600">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
              <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p className="text-xs font-light leading-3 text-gray-500">
                  10:00 AM
                </p>
                <p className="text-lg font-medium leading-5 pt-2">
                  Orientation session with new hires
                </p>
              </div>
              <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p className="text-xs font-light leading-3 text-gray-500 ">
                  9:00 AM
                </p>
                <p className="text-lg font-medium leading-5 pt-2">
                  Zoom call with design team
                </p>
                <p className="text-sm pt-2 leading-4 text-gray-600 ">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
