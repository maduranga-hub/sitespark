'use client';

import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  label?: string;
  value?: string;
  onRemove?: () => void;
}

export default function ImageUpload({ onUpload, label, value, onRemove }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { data, error } = await supabase.storage
        .from('site-assets')
        .upload(filePath, file);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('site-assets')
        .getPublicUrl(filePath);

      onUpload(publicUrl);
    } catch (err: any) {
      console.error('Upload error:', err);
      alert('Upload failed: ' + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="image-upload-container">
      {label && <label className="upload-label">{label}</label>}
      
      <div className={`upload-box ${value ? 'has-value' : ''} ${isUploading ? 'uploading' : ''}`} onClick={() => !value && fileInputRef.current?.click()}>
        {isUploading ? (
          <div className="upload-state">
            <Loader2 className="animate-spin" size={24} />
            <span>Uploading...</span>
          </div>
        ) : value ? (
          <div className="preview-container">
            <img src={value} alt="Preview" className="image-preview" />
            <button type="button" className="remove-btn" onClick={(e) => { e.stopPropagation(); onRemove?.(); }}>
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="upload-state">
            <Upload size={24} />
            <span>Click to upload image</span>
          </div>
        )}
      </div>

      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        style={{ display: 'none' }} 
      />

      <style jsx>{`
        .image-upload-container {
          margin-bottom: 1.5rem;
        }
        .upload-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .upload-box {
          width: 100%;
          min-height: 120px;
          background: var(--glass);
          border: 1px dashed var(--glass-border);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          overflow: hidden;
          position: relative;
        }
        .upload-box:hover {
          border-color: var(--primary);
          background: var(--glass-hover);
        }
        .upload-box.has-value {
          border-style: solid;
        }
        .upload-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .preview-container {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
        }
        .image-preview {
          max-width: 100%;
          max-height: 180px;
          border-radius: 8px;
          object-fit: contain;
        }
        .remove-btn {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 28px;
          height: 28px;
          background: rgba(255, 0, 0, 0.8);
          border: none;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }
        .remove-btn:hover {
          background: red;
          transform: scale(1.1);
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
