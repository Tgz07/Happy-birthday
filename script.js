// Hiệu ứng rung nhẹ tiêu đề
window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.birthday-header h1');
  if (title) {
    setInterval(() => {
      title.animate([
        { transform: 'scale(1) rotate(0deg)' },
        { transform: 'scale(1.04) rotate(-2deg)' },
        { transform: 'scale(1) rotate(0deg)' }
      ], {
        duration: 1200,
        iterations: 1
      });
    }, 2500);
  }

  // Hiệu ứng nút pháo hoa nhấp nháy
  const btn = document.querySelector('.confetti-btn');
  if (btn) {
    setInterval(() => {
      btn.animate([
        { boxShadow: '0 2px 12px rgba(0,0,0,0.12)', filter: 'brightness(1)' },
        { boxShadow: '0 0 24px #ff4e50, 0 0 48px #f9d423', filter: 'brightness(1.2)' },
        { boxShadow: '0 2px 12px rgba(0,0,0,0.12)', filter: 'brightness(1)' }
      ], {
        duration: 1200,
        iterations: 1
      });
    }, 1800);
  }

  // Hiệu ứng ảnh sinh nhật zoom-in khi hiển thị
  const imgInput = document.getElementById('imgUpload');
  const img = document.getElementById('birthdayImg');
  if (imgInput && img) {
    imgInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          img.src = evt.target.result;
          img.style.display = 'block';
          img.animate([
            { transform: 'scale(0.7)', opacity: 0 },
            { transform: 'scale(1.05)', opacity: 1 },
            { transform: 'scale(1)', opacity: 1 }
          ], {
            duration: 900,
            iterations: 1
          });
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Hiệu ứng audio fade-in khi phát
  const audioInput = document.getElementById('audioUpload');
  const audio = document.getElementById('birthdayAudio');
  if (audioInput && audio) {
    audioInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          audio.src = evt.target.result;
          audio.style.display = 'block';
          audio.volume = 0;
          audio.play();
          let fade = setInterval(() => {
            if (audio.volume < 0.95) {
              audio.volume += 0.05;
            } else {
              audio.volume = 1;
              clearInterval(fade);
            }
          }, 80);
        };
        reader.readAsDataURL(file);
      }
    });
  }
});
