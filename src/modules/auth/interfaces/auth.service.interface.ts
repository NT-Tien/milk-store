import { AdminUpdateAccountDataDto } from "../dto/admin-update-data.dto";
import { PasswordDto } from "../dto/password-update-data.dto";
import { PayloadTokenDto } from "../dto/payload-token.dto";
import { PhoneDto } from "../dto/phone.dto";
import { RegisterDataDto } from "../dto/register-data.dto";
import { UsernameDto } from "../dto/username-update-data.dto";

export interface AuthServiceInterface {
    // Hash password
    hashPassword(password: string): Promise<string>;
    // Register a new account for user
    register(data: RegisterDataDto): Promise<any>;
    // Login with email and password
    login(email: string, password: string): Promise<any>;
    // Login with firebase token
    loginWithFirebaseToken(token: string): Promise<any>;
    // Generate a new token
    generateToken(payload: PayloadTokenDto): Promise<string>;
    // Verify a token
    verifyToken(token: string): Promise<boolean>;
    // Verify a token for user
    verifyUserToken(token: string): Promise<boolean>;
    // Verify a token for staff
    verifyStaffToken(token: string): Promise<boolean>;
    // Verify a token for admin
    verifyAdminToken(token: string): Promise<boolean>;
    // Get PayloadToken from token
    decodeToken(token: string): Promise<PayloadTokenDto>;
    // ! features for admin
    // Get all accounts
    getAllAccounts(): Promise<any>;
    // Create new account
    createAccount(data: RegisterDataDto): Promise<any>;
    // Update account
    updateAccount(id: string, data: AdminUpdateAccountDataDto): Promise<any>;
    // Delete account (soft delete)
    softDeleteAccount(id: string): Promise<any>;
    // Undo delete account
    undoDeleteAccount(id: string): Promise<any>;
    // ! features for user
    // Change password
    changePassword(id: string, newPassword: PasswordDto): Promise<any>;
    // Change phone number
    changePhoneNumber(id: string, newPhone: PhoneDto): Promise<any>;
    // Change username
    changeUsername(id: string, newUsername: UsernameDto): Promise<any>;
}