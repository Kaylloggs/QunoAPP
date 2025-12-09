import React from "react";
import { X, Store, Zap, Filter, Music, Users, Headphones, ListMusic, Shield, PartyPopper, CheckCircle2, Percent, Shuffle, Crown } from "lucide-react";
import Button from "../ui/Button";

const MODAL_CONTENT = {
    kiosque: {
        header: {
            title: "Mode Kiosque",
            subtitle: "L'outil pro pour bars et restaurants",
            icon: Store,
            iconColor: "text-yellow-300"
        },
        features: [
            {
                icon: Filter,
                colorInfo: "bg-indigo-50 text-indigo-600",
                title: "Filtre Thématique",
                desc: "Définissez l'ADN musical (ex: Jazz, Rock 90s). Les suggestions hors-thème sont bloquées."
            },
            {
                icon: Music,
                colorInfo: "bg-purple-50 text-purple-600",
                title: "Expérience Client",
                desc: "Vos clients participent via QR Code sans ruiner l'ambiance."
            },
            {
                icon: Users,
                colorInfo: "bg-amber-50 text-amber-600",
                title: "Usage Pro",
                desc: "Idéal pour bars, cafés, salles de sport. Maîtrisez votre atmosphère."
            }
        ],
        price: "24,99€"
    },
    dj: {
        header: {
            title: "Mode DJ",
            subtitle: "Le public propose, le maître dispose",
            icon: Headphones,
            iconColor: "text-pink-300"
        },
        features: [
            {
                icon: ListMusic,
                colorInfo: "bg-pink-50 text-pink-600",
                title: "Inbox de Suggestions",
                desc: "Les invités envoient des idées, vous décidez si elles entrent dans le mix via une liste dédiée."
            },
            {
                icon: Shield,
                colorInfo: "bg-indigo-50 text-indigo-600",
                title: "Contrôle Absolu",
                desc: "Les invités ne voient pas la file d'attente réelle et ne peuvent pas l'influencer directement."
            },
            {
                icon: PartyPopper,
                colorInfo: "bg-purple-50 text-purple-600",
                title: "Idéal pour Fêtes",
                desc: "Mariages, soirées étudiantes... Gardez le contact avec la foule sans être interrompu."
            }
        ],
        price: "24,99€"
    },
    bundle: {
        header: {
            title: "Bundle Pro",
            subtitle: "L'expérience complète pour les pros",
            icon: Crown,
            iconColor: "text-indigo-200"
        },
        features: [
            {
                icon: CheckCircle2,
                colorInfo: "bg-green-50 text-green-600",
                title: "Tout Inclus",
                desc: "Accès illimité aux modes DJ et Kiosque. Basculez de l'un à l'autre sans contrainte."
            },
            {
                icon: Percent,
                colorInfo: "bg-orange-50 text-orange-600",
                title: "Économie de 20%",
                desc: "Le meilleur rapport qualité-prix : 40€/mois au lieu de 50€."
            },
            {
                icon: Shuffle,
                colorInfo: "bg-blue-50 text-blue-600",
                title: "Polyvalence Totale",
                desc: "Passez d'une ambiance bar tranquille à une soirée privée survoltée en un clic."
            }
        ],
        price: "40,00€"
    }
};

const SubscriptionModal = ({ isOpen, onClose, mode = "kiosque" }) => {
    if (!isOpen) return null;

    const content = MODAL_CONTENT[mode] || MODAL_CONTENT["kiosque"];
    const HeaderIcon = content.header.icon;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header with Gradient */}
                <div className="relative h-32 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
                    >
                        <X size={20} />
                    </button>
                    <div className="text-center text-white">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <HeaderIcon className={content.header.iconColor} size={24} />
                        </div>
                        <h2 className="text-2xl font-bold">{content.header.title}</h2>
                        <p className="text-indigo-100 text-sm font-medium">{content.header.subtitle}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    <div className="space-y-4">
                        {content.features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className={`p-2 rounded-xl ${feature.colorInfo}`}>
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{feature.title}</h3>
                                        <p className="text-sm text-slate-500">{feature.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Pricing Card */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
                        <p className="text-slate-500 text-sm mb-1">Abonnement Mensuel</p>
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-3xl font-bold text-slate-900">{content.price}</span>
                            <span className="text-slate-500">/mois TTC</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">Annulable à tout moment</p>
                    </div>

                    <Button
                        onClick={() => alert("Redirection vers la page de paiement...")}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-200"
                    >
                        Commencer dès maintenant
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionModal;
