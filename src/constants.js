"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYSTEM_PROGRAM_ID = exports.PUMP_FUN_ACCOUNT = exports.PUMP_FUN_PROGRAM = exports.RENT = exports.ASSOC_TOKEN_ACC_PROG = exports.TOKEN_PROGRAM_ID = exports.FEE_RECIPIENT = exports.GLOBAL = void 0;
const web3_js_1 = require("@solana/web3.js");
exports.GLOBAL = new web3_js_1.PublicKey("4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf");
exports.FEE_RECIPIENT = new web3_js_1.PublicKey("CebN5WGQ4jvEPvsVU4EoHEpgzq1VV7AbicfhtW4xC9iM");
exports.TOKEN_PROGRAM_ID = new web3_js_1.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
exports.ASSOC_TOKEN_ACC_PROG = new web3_js_1.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
exports.RENT = new web3_js_1.PublicKey("SysvarRent111111111111111111111111111111111");
exports.PUMP_FUN_PROGRAM = new web3_js_1.PublicKey("6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P");
exports.PUMP_FUN_ACCOUNT = new web3_js_1.PublicKey("Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1");
exports.SYSTEM_PROGRAM_ID = web3_js_1.SystemProgram.programId;
