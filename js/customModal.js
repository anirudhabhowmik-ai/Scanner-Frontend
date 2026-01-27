// Custom Modal Alert System
const CustomModal = {
    overlay: null,

    init() {
        if (this.overlay) return;

        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'custom-modal-overlay';
        this.overlay.innerHTML = `
            <div class="custom-modal">
                <div class="custom-modal-header">
                    <div class="custom-modal-icon">
                        <i class="fa fa-exclamation-triangle"></i>
                    </div>
                    <h3 class="custom-modal-title"></h3>
                </div>
                <div class="custom-modal-message"></div>
                <div class="custom-modal-buttons"></div>
            </div>
        `;
        document.body.appendChild(this.overlay);

        // Close on overlay click
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.close();
            }
        });
    },

    show(options = {}) {
        this.init();

        const {
            type = 'info', // 'warning', 'danger', 'success', 'info'
            title = 'Notice',
            message = '',
            confirmText = 'OK',
            cancelText = 'Cancel',
            showCancel = false,
            onConfirm = null,
            onCancel = null
        } = options;

        // Set icon
        const icon = this.overlay.querySelector('.custom-modal-icon');
        const iconMap = {
            warning: 'fa-exclamation-triangle',
            danger: 'fa-times-circle',
            success: 'fa-check-circle',
            info: 'fa-info-circle'
        };
        icon.className = `custom-modal-icon ${type}`;
        icon.innerHTML = `<i class="fa ${iconMap[type] || iconMap.info}"></i>`;

        // Set title and message
        this.overlay.querySelector('.custom-modal-title').textContent = title;
        this.overlay.querySelector('.custom-modal-message').textContent = message;

        // Set buttons
        const buttonsContainer = this.overlay.querySelector('.custom-modal-buttons');
        buttonsContainer.innerHTML = '';

        if (showCancel) {
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'custom-modal-btn btn-cancel';
            cancelBtn.textContent = cancelText;
            cancelBtn.onclick = () => {
                this.close();
                if (onCancel) onCancel();
            };
            buttonsContainer.appendChild(cancelBtn);
        }

        const confirmBtn = document.createElement('button');
        confirmBtn.className = `custom-modal-btn ${type === 'danger' ? 'btn-confirm' : 'btn-primary'}`;
        confirmBtn.textContent = confirmText;
        confirmBtn.onclick = () => {
            this.close();
            if (onConfirm) onConfirm();
        };
        buttonsContainer.appendChild(confirmBtn);

        // Show modal
        setTimeout(() => {
            this.overlay.classList.add('active');
        }, 10);

        // Focus confirm button
        setTimeout(() => {
            confirmBtn.focus();
        }, 300);
    },

    close() {
        if (!this.overlay) return;
        this.overlay.classList.remove('active');
    },

    alert(message, title = 'Notice', type = 'info') {
        return new Promise((resolve) => {
            this.show({
                type,
                title,
                message,
                confirmText: 'OK',
                showCancel: false,
                onConfirm: resolve
            });
        });
    },

    confirm(message, title = 'Confirm', type = 'warning') {
        return new Promise((resolve) => {
            this.show({
                type,
                title,
                message,
                confirmText: 'Confirm',
                cancelText: 'Cancel',
                showCancel: true,
                onConfirm: () => resolve(true),
                onCancel: () => resolve(false)
            });
        });
    },

    success(message, title = 'Success') {
        return this.alert(message, title, 'success');
    },

    error(message, title = 'Error') {
        return this.alert(message, title, 'danger');
    },

    warning(message, title = 'Warning') {
        return this.alert(message, title, 'warning');
    }
};

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CustomModal.init());
} else {
    CustomModal.init();
}