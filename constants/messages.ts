/**
 * App Messages - Centralized message strings
 * Performance: Dễ dàng i18n (internationalization) sau này
 */

export const MESSAGES = {
  // Success messages
  SUCCESS: {
    CONTACT_SUBMITTED: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.',
    TEST_DRIVE_BOOKED: 'Đặt lịch lái thử thành công! Chúng tôi sẽ liên hệ với bạn sớm.',
    FORM_SUBMITTED: 'Gửi form thành công!',
  },

  // Error messages
  ERROR: {
    GENERIC: 'Đã có lỗi xảy ra. Vui lòng thử lại sau.',
    NETWORK: 'Lỗi kết nối mạng. Vui lòng kiểm tra internet của bạn.',
    NOT_FOUND: 'Không tìm thấy dữ liệu.',
    INVALID_EMAIL: 'Email không hợp lệ.',
    INVALID_PHONE: 'Số điện thoại không hợp lệ.',
    REQUIRED_FIELD: 'Vui lòng điền đầy đủ thông tin.',
    SERVER_ERROR: 'Lỗi server. Vui lòng thử lại sau.',
  },

  // Validation messages
  VALIDATION: {
    REQUIRED: (field: string) => `${field} là bắt buộc.`,
    MIN_LENGTH: (field: string, length: number) => 
      `${field} phải có ít nhất ${length} ký tự.`,
    MAX_LENGTH: (field: string, length: number) => 
      `${field} không được vượt quá ${length} ký tự.`,
    INVALID_FORMAT: (field: string) => `${field} không đúng định dạng.`,
  },

  // Info messages
  INFO: {
    LOADING: 'Đang tải...',
    NO_RESULTS: 'Không có kết quả nào.',
    EMPTY_STATE: 'Chưa có dữ liệu.',
  },
} as const;

