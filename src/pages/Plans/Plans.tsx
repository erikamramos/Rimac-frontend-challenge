import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowIcon, ForMeIcon, ForSomeoneElseIcon } from "@/components/Icons";
import { Steps } from "@/components/molecules/Steps";
import { PlansCard, Card, Subtitle, Title } from "@/components/molecules/Plans";
import { useNavigate } from "react-router-dom";
import style from "./Plans.module.scss";
import useUser from "@/hooks/useUser";
import usePlans from "@/hooks/usePlans";
import { applyDiscount } from "@/services/PlanServices";
import { Plan } from "@/types/Plans";
import LoadingLayout from "@/components/Layout/LoadingLayout";

const Plans: React.FC = () => {
	const user = useUser();
	const userAge = user?.age || null;
	const { plans, loading } = usePlans(userAge);

	const [selectedForSomeoneElse, setSelectedForSomeoneElse] =
		useState<boolean>(false);
	const [showPlans, setShowPlans] = useState<boolean>(false);
	const [selectedPerson, setSelectedPerson] = useState<
		"me" | "someone-else" | null
	>(null);
	const [currentPage, setCurrentPage] = useState(0);
	const [plansPerPage, setPlansPerPage] = useState(1);

	const navigate = useNavigate();

	useEffect(() => {
		const updatePlansPerPage = () => {
			if (window.innerWidth > 700) {
				setPlansPerPage(3);
			} else {
				setPlansPerPage(1);
			}
			setCurrentPage(0);
		};

		updatePlansPerPage();
		window.addEventListener("resize", updatePlansPerPage);

		return () => {
			window.removeEventListener("resize", updatePlansPerPage);
		};
	}, []);

	const indexOfFirstCard = currentPage * plansPerPage;
	const indexOfLastCard = indexOfFirstCard + plansPerPage;
	const plansToShow = plans.slice(indexOfFirstCard, indexOfLastCard);
	const maxPages = Math.ceil(plans.length / plansPerPage);

	const handlePlanSelect = (plan: Plan) => {
		const selectedPlan = {
			...plan,
			price: applyDiscount(plan.price, selectedForSomeoneElse),
			selectedForSomeoneElse,
		};
		localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
		navigate("/summary");
	};

	const handleShowPlans = () => {
		setShowPlans(true);
	};

	// Funciones de paginación
	const nextPage = () => {
		if (currentPage < maxPages - 1) setCurrentPage(currentPage + 1);
	};

	const prevPage = () => {
		if (currentPage > 0) setCurrentPage(currentPage - 1);
	};

	if (loading) {
		return <LoadingLayout isLoading={true} />;
	}

	return (
		<Layout withFooter={false} withBackground={false}>
			<Steps step="one" />
			<div className={style["plans-container"]}>
				<button
					className={style["plans-container__arrow-container"]}
					onClick={() => window.history.back()}
				>
					<ArrowIcon width="20" height="20" color="#4F4FFF" />
					<div>Volver</div>
				</button>
				<Title />
				<Subtitle />
				<div className={style["plans-container__cards-container"]}>
					<Card
						Icon={ForMeIcon}
						title="Para mí"
						description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
						selected={selectedPerson === "me"}
						onClick={() => {
							setSelectedPerson("me");
							setSelectedForSomeoneElse(false);
							setCurrentPage(0);
							handleShowPlans();
						}}
					/>
					<Card
						Icon={ForSomeoneElseIcon}
						title="Para alguien más"
						description="Realiza una cotización para uno de tus familiares o cualquier persona."
						selected={selectedPerson === "someone-else"}
						onClick={() => {
							setSelectedPerson("someone-else");
							setSelectedForSomeoneElse(true);
							setCurrentPage(0);
							handleShowPlans();
						}}
					/>
				</div>
				{showPlans && (
					<>
						<div className={style["plans-container__plans-container"]}>
							{plansToShow.map((plan) => (
								<PlansCard
									key={plan.name}
									plan={plan}
									selectedForSomeoneElse={selectedForSomeoneElse}
									onSelect={handlePlanSelect}
								/>
							))}
						</div>
						{maxPages > 1 && (
							<div className={style["pagination"]}>
								<button onClick={prevPage} disabled={currentPage === 0}>
									<ArrowIcon width="20" height="20" color="white" />
								</button>
								<span>
									{currentPage + 1}/{maxPages}
								</span>
								<button
									onClick={nextPage}
									disabled={currentPage >= maxPages - 1}
									className={style["arrow-reversed"]}
								>
									<ArrowIcon width="20" height="20" color="white" />
								</button>
							</div>
						)}
					</>
				)}
			</div>
		</Layout>
	);
};

export default Plans;
