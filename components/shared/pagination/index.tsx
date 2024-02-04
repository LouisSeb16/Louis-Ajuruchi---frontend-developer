import React from 'react'
import clsx from "clsx";
import Link from "next/link";
import * as MdIcons from "react-icons/md";
import { usePathname, useSearchParams } from 'next/navigation';
import style from "./style.module.scss";
import { generatePagination } from './utils';

const AppPagination = ({ totalPages }: { totalPages: number }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const allPages = generatePagination(currentPage, totalPages);

    return (
        <>
            <div className={style.paginationCon}>
                <PaginationArrow
                    direction="left"
                    href={createPageURL(currentPage - 1)}
                    isDisabled={currentPage <= 1}
                />
                <div className={style.pages}>
                    {allPages.map((page: any, index: any) => {
                        let position: "first" | "last" | "single" | "middle" | undefined;

                        if (index === 0) position = "first";
                        if (index === allPages.length - 1) position = "last";
                        if (allPages.length === 1) position = "single";
                        if (page === "...") position = "middle";

                        return (
                            <PaginationNumber
                                key={page}
                                href={createPageURL(page)}
                                page={page}
                                position={position}
                                isActive={currentPage === page}
                            />
                        );
                    })}
                </div>
                <PaginationArrow
                    direction="right"
                    href={createPageURL(currentPage + 1)}
                    isDisabled={currentPage >= totalPages}
                />
            </div>
        </>
    );
};

export default AppPagination;

const PaginationNumber = ({
    page,
    href,
    isActive,
    position
}: {
    page: number | string;
    href: string;
    position?: "first" | "last" | "middle" | "single";
    isActive: boolean;
}) => {
    const conditions = {
        [style.first]: position === "first" || position === "single",
        [style.last]: position === "last" || position === "single",
        [style.isActive]: isActive,
        [style.notActiveNotMiddle]: !isActive && position !== "middle",
        [style.middle]: position === "middle"
    };
    const className = clsx(style.paginationBtn, conditions);

    return isActive || position === "middle" ? (
        <div className={className}>{page}</div>
    ) : (
        <Link href={href} className={className}>
            {page}
        </Link>
    );
};

const PaginationArrow = ({
    href,
    direction,
    isDisabled
}: {
    href: string;
    direction: "left" | "right";
    isDisabled?: boolean;
}) => {
    const conditions = {
        [style.disabled]: isDisabled,
        [style.notDisabledHover]: !isDisabled,
        [style.left]: direction === "left",
        [style.right]: direction === "right"
    };

    const className = clsx(style.paginationArrow, conditions);

    const icon =
        direction === "left" ? <MdIcons.MdKeyboardArrowLeft /> : <MdIcons.MdKeyboardArrowRight />;

    return isDisabled ? (
        <div className={className}>{icon}</div>
    ) : (
        <Link className={className} href={href}>
            {icon}
        </Link>
    );
};