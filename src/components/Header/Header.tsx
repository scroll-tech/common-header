import React, { useState } from "react"
import "./Header.scss"
import { navigation } from "./contants"

export interface HeaderProps {
  activeTab?: string
  backgroundColor?: string
}

class Header extends React.Component<HeaderProps, { open: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = { open: false }
  }

  render(): React.ReactNode {
    const { backgroundColor } = this.props
    const { open } = this.state
    return (
      <div className="w-full scroll-component" style={{ backgroundColor }}>
        <nav className="container box-border relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <a
              href="https://prealpha.scroll.io/"
              className="flex items-center space-x-2 text-2xl font-medium text-gray-800 dark:text-gray-100"
            >
              <img
                src="https://scroll.io/img/logo_with_text.png"
                alt="logo"
                width={96}
                height={39}
                className="cursor-pointer"
              />
            </a>
            <svg
              className="w-6 h-6 fill-curren lg:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => {
                this.setState({
                  open: !open,
                })
              }}
            >
              {open && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!open && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
            {open ? (
              <div className="flex flex-wrap w-full my-5 lg:hidden ">
                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target={item.isExternal ? "_blank" : "_self"}
                    className={`${
                      this.props.activeTab === item.name &&
                      "text-indigo-500 bg-indigo-100"
                    } flex items-center w-full px-2 xl:px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700`}
                  >
                    {item.name}{" "}
                    {item.isExternal && (
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="OpenInNewIcon"
                        className="fill-current"
                        width={"1.2em"}
                        height={"1.2em"}
                      >
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((tab) => (
                <li className=" nav__item xl:mr-3 " key={tab.name}>
                  <a
                    target={tab.isExternal ? "_blank" : "_self"}
                    href={tab.link}
                    className={`${
                      this.props.activeTab === tab.name &&
                      "bg-indigo-100 text-indigo-500"
                    } flex inline-block px-2 xl:px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500  focus:outline-none dark:focus:bg-gray-800`}
                  >
                    {tab.name}{" "}
                    {tab.isExternal && (
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="OpenInNewIcon"
                        className="fill-current"
                        width={"1.5em"}
                        height={"1.5em"}
                      >
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden xl:mr-3 space-x-4 lg:flex nav__item"></div>
        </nav>
      </div>
    )
  }
}

export default Header
